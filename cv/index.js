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

    renderCV() {
        const email = document.getElementById('email')
        const jobs = document.getElementById('jobs')
        const educations = document.getElementById('education')

        email.innerHTML = this.email

        this.jobs.forEach((job) => {
            const jobItem = document.createElement('li')
            jobItem.innerHTML = `
            <div>Title: ${job.title}</div>
            <div>Description ${job.description}</div>
            <div>Start date: ${job.startDate}</div>
            `

            jobs.appendChild(jobItem)
        })

        this.educations.forEach((education) => {
            const educationItem = document.createElement('li')
            educationItem.innerHTML = `
            <div>Title: ${education.title}</div>
            <div>School ${education.school}</div>
            <div>Start date: ${education.startDate}</div>
            `

            educations.appendChild(educationItem)
        })
    }
}

const myCV = new CV('superguygreatdude@aol.io')

const cookJob = new Job(
    'cook',
    'served customers food',
    'sept 2014',
    'sept 2016'
)
const salesJob = new Job(
    'sales rep',
    'sold cellphones',
    'sept 2016',
    'sept 2018'
)

myCV.addJob(cookJob)
myCV.addJob(salesJob)

const highSchool = new Education(
    'highschool',
    'Myer',
    'niagara falls',
    'sept 2013',
    'sept 2014'
)

myCV.addEducation(highSchool)

myCV.removeJob(cookJob)

myCV.renderCV()
