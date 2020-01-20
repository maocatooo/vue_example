<template>
  <div>
    <template v-for="i in questionList">
      <div> {{i}}</div>
    </template>
    <template v-for="i in questionList" v-show="question_rule[i.id].show">
      <div v-show="question_rule[i.id].show">show</div>
      <p>{{i.question}}===={{i.id}}===={{question_rule[i.id].show}}==={{question_rule[i.id].value}}</p>
      <template v-if="i.items">
        <template v-for="itemGap in i.items">
          <p>----{{itemGap.question}}</p>
        </template>
      </template>
      <template v-else-if="i.choices">
        <template v-for="itemChoices in i.choices">
          <p @click="check(i.id, itemChoices.id)"><input type="checkbox" :value="itemChoices.id">{{itemChoices.id}}----{{itemChoices.label}}
          </p>
        </template>
      </template>
    </template>
  </div>
</template>

<script>
    export default {
        name: "Question",
        data() {
            return {
                questionList: [],
                question_rule: {}, // ==> {"qid":{'show':true,}}
                question_order: []
            }
        },
        mounted() {
            this.$http.get("http://127.0.0.1:5000/v1/client/auth/5da6c73173f00931b4f9e570/question").then((data) => {
                this.questionList = data.body

                for (let i = 0; i < this.questionList.length; i++) {
                    let this_question = this.questionList[i]
                    let id = this_question["id"]
                    this.question_order.push(id)
                    let rule = {
                        show: true,
                        value: [],
                        detail: this_question,
                        redirect_login: this_question.question_redirect_logic || [],
                    }
                    this.question_rule[id] = rule
                }
                this.refRule()
            })
        },
        methods: {
            refRule() {
                for (let i = 0; i < this.question_order.length; i++) {
                    let this_question = this.questionList[i]
                    let logic_redirect = this_question['question_redirect_logic']
                    if (logic_redirect) {
                        let max_display = []
                        let [done, undone] = [false, false]
                        logic_redirect.forEach((item, index, arr) => {
                            if (item.redirect === "done") {
                                done = true
                            } else if (item.redirect === "undone") {
                                undone = true
                            } else {
                                max_display.push(item.redirect)
                            }
                        })
                        if (done || undone) {
                            this.question_order.slice(i + 1).forEach((item) => {
                                this.question_rule[item].show = false
                            })
                            break
                        } else {
                            this.question_order.slice(i + 1, this.question_order.indexOf(max_display[max_display.length - 1])).forEach((item) => {
                                this.question_rule[item].show = false
                            })
                            i = this.question_order.indexOf(max_display[max_display.length - 1])
                            if (i === -1) break
                        }
                    }
                }
            },
            check(qid, cid) {
                let question = this.question_rule[qid]
                if (this.question_rule[qid].value.indexOf(cid) === -1) {
                    this.question_rule[qid].value.push(cid)
                } else {
                    this.question_rule[qid].value.splice(this.question_rule[qid].value.indexOf(cid), 1)
                }
                for (let i in question.redirect_login) {
                    let redirect_login = question.redirect_login[i]
                    if (this.question_rule[qid].value.sort().toString() === redirect_login.choices.sort().toString()) {
                        this.redirectQuestion(qid, redirect_login.redirect)
                    } else {
                        this.redirectQuestion(qid, redirect_login.redirect, true)
                    }
                }
            },
            redirectQuestion(qid, redirect, show = false) {
                let index = 0
                if (redirect === 'done' || redirect === 'undone') {
                    index = this.question_order.length
                } else {
                    index = this.question_order.indexOf(redirect)
                }
                this.question_order.slice(this.question_order.indexOf(qid) + 1, index).forEach(
                    (item) => {
                        this.questionShow(item, show)
                    }
                )
            },
            questionShow(qid, show = false) {
                this.question_rule[qid].show = show
            }

        }

    }
</script>

<style scoped>

</style>
