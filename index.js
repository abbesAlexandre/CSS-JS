const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function setPosts(){
   let posts_length = posts.length;
   let main = document.querySelector("main");
   
   for (let i = 0; i< posts_length; i++){
       
       // posts header 
       
       let avatar = document.createElement("img");
       avatar.src = posts[i].avatar;
       avatar.className = "avatar";
       
       let name = document.createElement("h2");
       name.innerText = posts[i].name;
       
       let location = document.createElement("p");
       location.innerText = posts[i].location;
       
       // wrapping the text in a container
       
       let text_wrapper = document.createElement("div");
       text_wrapper.append(name, location);
       text_wrapper.className="text--wrapper";
       
       // appending header item
       
       let header = document.createElement("header");
       header.append(avatar, text_wrapper);
       
       // posts image 
       
       let image = document.createElement("img");
       image.src=posts[i].post;
       image.className="post--image likes--"+i;
       image.id="post--image--"+i;
       
       // posts content 
       
       let content_container = document.createElement("div")
       content_container.className = "content--container";
       // icons
       
       let icons_container = document.createElement("div");
       icons_container.className="icons--container";
       
       let heart = document.createElement("span");
       heart.className="heart";
       heart.id="heart--"+i;
      
       let comment = document.createElement("span");
       comment.className="comment";
       let dm = document.createElement("span");
       dm.className="dm";
       
       icons_container.append(heart,comment,dm);
       
       // likes
       
       let likes = document.createElement("p")
       likes.innerText = posts[i].likes + " likes";
       likes.className="bold";
       likes.id = "likes--"+i;
       
       // comment
       let comments = document.createElement("p")
       comments.innerHTML = `<span class="bold">${posts[i].username}</span> ${posts[i].comment}`;
       
       // append content to content_container
       content_container.append(icons_container, likes, comments);
       
       //appending all posts content
        
       let container = document.createElement("section");
       container.append(header, image, content_container);
       container.className = "container";
       
       main.appendChild(container); 
       heart.addEventListener("click", function(){addLikes(likes.id)});
       image.addEventListener("dblclick", function(){addLikes(likes.id)});
   }
}

function addLikes(id){
    let actual_likes = document.getElementById(id);
    if (actual_likes){
       let count = actual_likes.innerText.match('^[0-9]+');
       count ++;
       actual_likes.innerText = count + " likes";
    }
}

setPosts();