class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){

        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <h3 class="font-weight-bold text-info">${user.login}</h3>
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="blank" class="btn btn-primary btn-block mb-4">Go To Profile</a>
                    </div>
                
                    <div class="cold-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>  
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>

                    </div>
        
                </div>       
            </div>

            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }
    showRepos(repos){
        let output= '';

        repos.forEach(function(repos){
            output += `
            <div class ="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repos.html_url}" target="_blank">${repos.name}</a>
                    </div>


                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repos.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repos.watchers_count}</span>
                        <span class="badge badge-success">Followers: ${repos.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
            document.getElementById('repos').innerHTML = output;
        })
    }

}