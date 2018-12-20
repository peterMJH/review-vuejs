<template>
    <div>
        <m-table :data="data"></m-table>
        Checked Values : {{multiSelect}}
        <!--<table ref="multipleTable">
            <tr>
                <td><input type="checkbox" id="checkbox" @change="parentChecked"></td>
                <td>id</td>
                <td>userId</td>
                <td>title</td>
                <td>body</td>
            </tr>
            <tr v-for="(element, index) in data" v-bind:key="index">
                <td><input type="checkbox" :value="index" v-model="multiSelect"></td>
                <td>{{element.id}}</td>
                <td>{{element.userId}}</td>
                <td>{{element.title}}</td>
                <td>{{element.body}}</td>
            </tr>
        </table>-->
    </div>
</template>
<script>
import mTable from '../components/Table'
export default {
    components: { mTable },
    data() {
        return {
            data: [],
            multiSelect: [0, 1]
        }
    },
    mounted() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            this.data = response.data
        })
        
    },
    methods: {
        parentChecked() {
            alert('parentChecked')
        }
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

