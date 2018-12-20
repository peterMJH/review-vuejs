<script>
export default {
    data() {
        return {}
    },
    props: {
        data: {
            type: Array
        }
    },
    methods: {
        getDataKey() {
            return Object.keys(this.data[0])
        },
        createHeader(createElement, element) {
            return createElement('th', {}, [element])
        },
        createChild(createElement, element) {
            let children = []
            this.getDataKey().map(item => {
                children.push(createElement('td', {}, element[item]))
            })
            return createElement('tr', {}, children)
        }
    },
    render(createElement) {
        return createElement('table', {}, [
            createElement('tr', {}, 
                this.getDataKey().map(element => {
                    return this.createHeader(createElement, element) 
                })
            ),
            this.data.map(element => {
                return this.createChild(createElement, element)
            })]
        )
    }
}
</script>
<style>
  table {
    width: 100%;
    border: 1px solid #444444;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #444444;
    padding: 10px;
  }
</style>
