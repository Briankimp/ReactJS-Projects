 async function showAvatar(){
    let response = await fetch('https://api.github.com/users/BrianKimp')
    let user = await response.json();

    let githubRestponse = await fetch('https://api.github.com/users/BrianKimp')
    let githubUser = await githubRestponse.json();

    let img = document.createElement('img');
    img.src = githubUser.avatar-url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await new Promise((resolve,reject)=> setTimeout(resolve,1000));
    img.resolve;
    return githubUser;
 }

 showAvatar();