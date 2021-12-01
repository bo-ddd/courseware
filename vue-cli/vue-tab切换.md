```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./node_modules/vue/dist/vue.min.js"></script>
    <style>
        div{
            width:100px;
            height:100px;
            background-color: red;
        }

        .active{
            background-color: yellow;
        }
    </style>
</head>
<body>
    <div id="app">
        <div :class="active ? 'active' : ''" @click="handleClick"></div>
    </div>
</body>
<script>
    var vm = new Vue({
        el:"#app",
        data:{
            active:true
        },
        methods:{
            handleClick(){
                this.active = !this.active;
            }
        }
    })
</script>
</html>
```

