console.log('hello')

function makeid() {
    var text = ''
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
}

class Job {
    constructor(title, description, startDate, endDate) {
        this.id = makeid()
        this.title = title
        this.description = description
        this.startDate = startDate
        this.endDate = endDate
    }
}

class Education {
    constructor(title, school, address, startDate, endDate) {
        this.id = makeid()
        this.title = title
        this.school = school
        this.address = address
        this.startDate = startDate
        this.endDate = endDate
    }
}

class CV {
    constructor(email) {
        this.jobs = []
        this.educations = []
        this.email = email
    }

    addJob(job) {
        this.jobs.push(job)
    }

    removeJob(job) {
        // const jobIndex = this.jobs.findIndex(
        //     (jobElement) => jobElement.id === job.id
        // )
        // this.jobs.splice(jobIndex, 1)
        this.jobs = this.jobs.filter((jobElement) => jobElement.id !== job.id)
    }

    addEducation(education) {
        this.educations.push(education)
    }

    removeEducation(education) {
        this.educations = this.educations.filter(
            (educationElement) => educationElement.id !== education.id
        )
    }
}
