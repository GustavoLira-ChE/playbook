const repo = {
    name: 'LaunchX',
    author: 'gustavolire',
    language: 'JavaScript',
    numberOfCommits: 148,
    stars: 9,
    forks: 14,
    issues_open: 0,
    issues_close: 0,
    getTotalIssues: function(){
        return this.issues_close + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name}  was created by ${this.author}`
    }
}

console.log("Nombre del repo: " + repo['name'])
console.log("Total issues: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
    title: 'TypeError',
    repositoryNameAssociated: 'node_repo',
    status: 'open',
    numberOfComments: 10,
    labels: 'util',
    author: 'johnDoe',
    dateCreated: 06-13-2021,
    lastUpdated: new Date(),
    getTitleAndAuthor: function(){
        return `The author of this issue is ${this.author} and issue's title is ${this.title}`
    },
    getGeneralInfo: function(){
        return `Status: ${this.status}, repository name: ${this.repositoryNameAssociated}`
    }
}

console.log(`The repo ${issue.repositoryNameAssociated} has and issue titled ${issue.title}`)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

const pullRequest = {
    author: 'gusLire',
    title: 'adding new functionality',
    branchName: 'main',
    dateCreated: new Date(),
    status: 'open',
    repositoryNameAssociated: 'open-source-JS',

    getStatus: function(){
        return `Status: ${this.status}`
    },
    getTitleAndAuthor: function(){
        return `The author of this pull request is ${this.author} and pullRequest's title is ${this.title}`
    }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())
