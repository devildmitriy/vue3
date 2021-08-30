function getRandomkValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            levelCount: 0,
            winner: null,
            logMessages: [],
        }
    },
    methods: {
        attackMonster() {
            this.levelCount++
            let attackValue = getRandomkValue(5, 12);
            this.monsterHealth -= attackValue;
            this.createLog('player','attack',attackValue)
            this.attackPlayer();
        },
        attackPlayer() {
            let attackValue = getRandomkValue(8, 15)
            this.playerHealth -= attackValue;
            this.createLog('monster','attack',attackValue)
        },
        specialAttack() {
            this.levelCount++
            let attackValue = getRandomkValue(12, 25);
            this.monsterHealth -= attackValue;
            this.createLog('player','special-attack',attackValue)
            this.attackPlayer();
        },
        healPlayer() {
            this.levelCount++;
            healValue = getRandomkValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.createLog('player','heal',healValue)
            this.attackPlayer()
        },
        restart() {
            this.levelCount = 0;
            this.winner = null;
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.logMessages = [];
        },
        surrender() {
            this.winner = 'monster';
        },
        createLog(who, what, value) {
            console.log(who,what,value);
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        },

    },
    computed: {
        monsterBarStyle() {
            if (this.monsterHealth < 0) {
                return {
                    width: `0%`
                }
            }
            return {
                width: `${this.monsterHealth}%`
            }
        },
        playerBarStyle() {
            if (this.playerHealth < 0) {
                return {
                    width: `0%`
                }
            }
            return {
                width: `${this.playerHealth}%`
            }
        },
        isSpecialAttack() {
            return (this.levelCount % 3 !== 0)
        },
        isHeal() {
            return (this.levelCount % 2 !== 0)
        }
    },
    watch: {
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }

        },
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
            }
        }
    }
})

app.mount('#game')