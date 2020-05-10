<template>
  <article>
      <form id="createForm">
          <input type="text" v-model="post.title" placeholder="Name of the country" required>
          <input v-model="post.description" placeholder="Area in the World: Europe, Africa etc."/>
          <input type="file" ref="fileInput" accept="image/*" @change="previewImage">
          <div>
              <img :src="post.img" class="image-preview">
          </div>
          <button type="button" @click="createPost">Lav post</button>
      </form>
  </article>
</template>

<script>
import { postRef } from '../firebase-db'
export default {
    data(){
        return{
            post:{
                title: "",
                description: "",
                img: "",
            }
        }
    },
    methods: {
        previewImage(){
            const imageFile = this.$refs.fileInput.files[0]
            const fileReader = new FileReader()
            fileReader.onload = (event) => {
                this.post.img = event.target.result
            }
            fileReader.readAsDataURL(imageFile)
        },
        createPost(){
            postRef.add(this.post)
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
 form {
  padding: 2em 1em 2.5em;
}

article {
  height: 70vh;
}

button {
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 12px 15px;
  font-size: 1em;
  border-radius: 0;
  color: darkgreen;
  width: 100%;
  max-width: 350px;
  background-color: orange;
  transition: .4s ease;
}
button:hover {
transform: scale(1.1);
}




input {
  margin: 1em auto;
  width: 100%;
  max-width: 350px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: solid 2px white;
  color: white;
}

::-webkit-input-placeholder { /* Edge */
  color: rgba(255, 255, 255, 0.5);
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgba(255, 255, 255, 0.5);
}

::placeholder {
  color: rgba(255, 255, 255, 0.5);
}



.image-preview {
  max-width: 350px;
  width: 100%;
  padding: 1em 0;
}
</style>