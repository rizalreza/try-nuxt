<template>
    <div class="container">
       <center> <h1>Welcome, {{user.name}}</h1> </center>
       <center>Your status authenticated is , {{authenticated}}</center>
    </div>
</template>

<script>
export default {
    middleware: 'auth'
};
</script>

