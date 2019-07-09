<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
 data() {
    return {
      list: []
    }
  },
    created(){
    this.fetch()
  },
  methods: {
    fetch() {
      this.$axios.get("/api/bj11x5.json")
        .then(res => {
            this.list = res.data
            console.log(res)
        }).catch( err=> {
            console.log(err)
        })
    }
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
