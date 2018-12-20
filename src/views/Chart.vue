<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
        <g 
        v-for="(value, i) in animatedChartData" v-bind:key="i" 
        :transform="`translate(0, ${i * 40})`">
            <rect :width="barWidth(value)" :height="30" fill="#ffcd00"></rect>
            <text y="15">{{value}}</text>
        </g>
        </svg>
        <button @click="changeData">change Data</button>
         {{data}}
    </div>
</template>
<script>
export default {
    watch: {
        data() {
        this.animate();
        },
    },
    mounted() {
        this.animate()
    },
    computed: {
        dataMax() {
            return Math.max(...this.data);
        }
    },
    data() {
        return {
            width: 500,
            height: 400,
            x: 10,
            y: 10,
            data: [5, 8, 20, 3, 17, 14, 4, 1, 8],
            animatedChartData: [0, 0, 0, 0, 0, 0, 0, 0 ,0]
        }
    },
    methods: {
        barWidth(value) {
            return this.width / this.dataMax * value;
        },
        changeData() {
            this.data = new Array(9).fill('').map(() => 1 + Math.floor(Math.random() * 20))
        },
        animate() {
            const fromValues = this.animatedChartData;
            const toValues = this.data;

            const duration = 600;
            const start = Date.now();

            const frame = () => {
                const elapsed = Date.now() - start;
                const percent = elapsed / duration;

                if (percent >= 1) {
                    this.animatedChartData = this.data;
                } else {
                this.animatedChartData = toValues.map((toVal, i) => {
                    const fromVal = fromValues[i];
                    return fromVal + (toVal - fromVal) * percent;
                });
                requestAnimationFrame(frame);
                }
            }

            requestAnimationFrame(frame);
    }
    }
}
</script>
