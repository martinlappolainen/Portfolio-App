class Github{
    constructor(){
        this.client_id = '0bc6eb0431a9c37be91c';
        this.client_secret='c53174ef3524cc1a862d7aeb0653bbec41e07222';
        this.repos_count= 5;
        this.repos_sort='created: asc';
        this.user='martinlappolainen';
    }
    //get a user info

    async getUserData(){
        let urlProfile = `https://api.github.com/users/${this.user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        let urlRepos= `https:api.github.com/users/${this.user}/repos?per_page${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
        
        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile,
            repos
        }
    }
}