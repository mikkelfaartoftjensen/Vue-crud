<template>
  <section class="post-container">
    <article v-for="post in posts" :key="post.id" class="country">
        <div id="overlay-container">
            <div id="post-overlay">
        <h2>{{post.title}} </h2>
        <p>{{post.description}}</p>
        <div>
        </div>
        </div>
        <img :src="post.img" :alt="post.title">
        </div>
        <div id="button-container">
        <button @click="selectPost(post.title, post.description, post.id, post.img)">Update</button>

        <button @click="deletePost(post.id)">Delete</button>
        </div>
    </article>

                <!-- update form -->
            <div class="updateMemeForm" ref="updateMemeForm">
                <h4>Opdater {{updatedPost.title}}</h4>
          <div>
              <img :src="updatedPost.img" class="image-preview">
          </div>
            <input type="text" v-model="updatedPost.title" placeholder="Typo? Correct the title here">
            <input type="text" v-model="updatedPost.description" placeholder="Add the correct area here">
          <input type="file" ref="fileInput" accept="image/*" @change="previewImage">
            <button type="button" @click="updatePost">Opdater</button>
                </div>
                <div class="overlay" ref="overlay" @click="selectPost"></div>
                <!-- update form end -->

  </section>
</template>

<script>
import { postRef } from '../firebase-db'
export default {
    data() {
        return{
            posts: [],
            updatedPost: {
                id: "",
                title: "",
                description: "",
                img: ""
            }
        }
    },
    firestore: {
        posts: postRef
    },
    methods: {
        selectPost(title, description, id, img){
            this.updatedPost.description = description
            this.updatedPost.img = img;
            this.updatedPost.id = id;
            this.updatedPost.title = title
            this.$refs.updateMemeForm.classList.toggle("active");
            this.$refs.overlay.classList.toggle("active");
        },
        updatePost(){
            postRef.doc(this.updatedPost.id).update(this.updatedPost)
            this.$refs.updateMemeForm.classList.remove("active");
            this.$refs.overlay.classList.remove("active");
        },
        previewImage(){
            const imageFile = this.$refs.fileInput.files[0]
            const fileReader = new FileReader()
            fileReader.onload = (event) => {
                this.updatedPost.img = event.target.result
            }
            fileReader.readAsDataURL(imageFile)
        },
        deletePost(id){
            console.log(id)
            postRef.doc(id).delete();
        }

    }

}
</script>

<style scoped>
.post-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
}
.post-container article{
    color: white;
    position: relative;
    width: 15%;
    margin: 3vh auto;
    height: 5%;
}
#overlay-container {
    width: 100%;
    height: 90%;
}
#post-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: .4s;
    border-radius: 5%;
}
#post-overlay:hover {
    opacity: 1;
    transform: scale(1.1);
}

#button-container {
    position: absolute;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 2%;
}

#button-container button {
    width: 45%;
}

.post-container article img{
    height: 100%;
    width: 100%;
    border-radius: 5%;
}

.overlay{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 15;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
}

.overlay.active{
    display: block;
}

.updateMemeForm.active{
    bottom: 0vh;
    opacity: 1;
}


.updateMemeForm{
    height: 80vh;
    width: 45vw;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999999;
    color: white;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    transition: .4s ease;
    bottom: -80vh;
}

.updateMemeForm input, .updateMemeForm textarea, .updateMemeForm img{
    width: 75%;
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


.updateMemeForm button{
    width: 50%;
    padding: 2vh;
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

</style>