const twitter_obj = {
    user: 'Gustavo',
    bio: 'FullStack developer, Chemical Engineer',
    followers: 2,
    following: 20,
    tweets: 0,
    retweeted: 2,
    tweets_replies: 3,
    likes: 10,
    showUserName: function(){
        return `User name: ${this.user}`
    },
    showUserBio: function(){
        return `User bio: ${this.bio}`
    }
}
console.log(twitter_obj)
console.log(twitter_obj.showUserName())
console.log(twitter_obj.showUserBio())

const facebook_obj = {
    userName: 'John Doe',
    friends: 300,
    post: 500,
    photos: 400,
    about: {
        overview: 'a good person',
        work_and_education: ['frontend developer', 'monster university'],
        place_lived:['mx','us'],
        contact: '+1 504-243-32-23',
        relationship: 'married'
    },
    getPersonalInfo: function(){
        return `Hi my name is ${this.userName} and I'm ${this.about.overview}, I'm currently working as a ${this.about.work_and_education[0]} and I'm ${this.about.relationship}`
    }
}

console.log(facebook_obj)
console.log(facebook_obj.getPersonalInfo())

const uber_obj = {
    userName: 'John Doe',
    rating: 4.89,
    wallet: {
        uberCash: 30.58,
        creditCard: 'visa ****1111'
    },
    trips: 58,
    uberRewards: 3476,
    uberOne: 'unsubscribed',
    getBasicInfo: function(){
        return `${this.userName} has ${this.rating} of rating.`
    }
}
console.log(uber_obj)
console.log(uber_obj.getBasicInfo())
