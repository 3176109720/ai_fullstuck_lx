<template>
    <section>
        <header class="top_tips">
            <span class="num_tip" v-if="parentComponent === 'home'">第一周</span>
            <span class="num_tip" v-if="parentComponent === 'item'">题目{{ itemNum }}</span>
        </header>

        <!-- home -->
        <div v-if="parentComponent === 'home'">
            <div class="home_logo item_container_style"></div>
            <router-link to="/item" class="start button_style"></router-link>
        </div>

        <!-- item -->
        <div v-if="parentComponent === 'item'">
            <div class="item_back item_container_style">
                <div class="item_list_container" v-if="questionList.length">
                    <header class="item_title">{{ questionList[itemNum - 1].topic_name }}</header>
                    <ul>
                        <li class="item_list" v-for="(item, index) in questionList[itemNum - 1].topic_answer"
                            @click="choosed(index, item.topic_answer_id)">
                            <span class="option_style" :class="{ 'current': currentNum === index }">{{ chooseType(index)
                            }}</span>
                            <span class="option_detail">{{ item.answer_name }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <span v-if="itemNum < questionList.length" class="next_item button_style" @click="nextItem"></span>
            <span v-else class="next_item button_style" @click="subumit"></span>
        </div>

    </section>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';
export default {
    props: ['parentComponent'],
    data() {
        return {
            currentNum: null,   // 只能判断有没有选择一个答案
            chooseId: null
        }
    },
    computed: {
        ...mapState(['questionList', 'itemNum'])
    },
    methods: {
        chooseType(index) {
            return String.fromCharCode(65 + index);
        },
        choosed(index, id) {
            // 点谁谁就要高亮，保存被选中的答案
            this.currentNum = index
            this.chooseId = id
        },
        nextItem() {
            if (this.currentNum !== null) {
                this.nextItemAction(this.chooseId)
                this.currentNum = null

            } else {
                alert('请输入一个答案')
            }
        },
        subumit() {
            if (this.currentNum !== null) {
                this.nextItemAction(this.chooseId) // 答案
                this.$router.push('/score')
            }
        },
        ...mapActions(['nextItemAction'])
    }
}
</script>
  
<style lang="less" scoped>
.top_tips {
    position: absolute;
    right: 1.6rem;
    top: -1.3rem;
    width: 3.25rem;
    height: 7.35rem;
    background: url('../assets/images/WechatIMG2.png') no-repeat;
    background-size: 100% 100%;

    .num_tip {
        position: absolute;
        left: 0.48rem;
        bottom: 1.1rem;
        width: 2.5rem;
        height: 0.7rem;
        font-family: '黑体';
        font-weight: 600;
        color: #a57c50;
        font-size: 0.6rem;
        text-align: center;
    }
}

.item_container_style {
    width: 13.15rem;
    height: 11.625rem;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
    background-repeat: no-repeat;
}

.home_logo {
    background-image: url(../assets/images/1-2.png);
    background-size: 100% 100%;
}

.button_style {
    width: 4.35rem;
    height: 2.1rem;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.175rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.start {
    background-image: url(../assets/images/1-4.png);
}

.item_back {
    background-image: url(../assets/images/2-1.png);
    background-size: 100% 100%;
}

.item_list_container {
    position: absolute;
    width: 8rem;
    top: 2.4rem;
    left: 3rem;

    .item_title {
        font-size: 0.65rem;
        color: #fff;
        line-height: 0.7rem;
    }

    .item_list {
        width: 10rem;

        span {
            color: #fff;
            font-size: 0.6rem;
            display: inline-block;
        }

        .option_style {
            width: 0.725rem;
            height: 0.725rem;
            border: 1px solid #fff;
            border-radius: 50%;
            font-size: 0.5rem;
            line-height: 0.725rem;
            text-align: center;
            font-family: 'Arial';
            margin-right: 0.3rem;

            &.current {
                background-color: #ffd400;
                color: #575757;
                border-color: #ffd400;
            }
        }
    }
}

.next_item {
    background-image: url(../assets/images/2-2.png);
}
</style>