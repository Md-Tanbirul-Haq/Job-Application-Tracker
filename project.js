let total_job = document.getElementById('total_job')
let interview_job = document.getElementById('interview_job')
let rejected_job = document.getElementById('rejected_job')
interview_job.classList.add('hidden')
rejected_job.classList.add('hidden')

let interview_count = 0
let reject_count = 0



document.getElementById('total_btn').addEventListener('click', function () {

    total_job.classList.remove('hidden')
    interview_job.classList.add('hidden')
    rejected_job.classList.add('hidden')

    document.getElementById('total_btn').classList.add('btn-info')
    document.getElementById('interview_btn').classList.remove('btn-info')
    document.getElementById('rejected_btn').classList.remove('btn-info')

    document.getElementById('job_number').innerText = ""

})
document.getElementById('interview_btn').addEventListener('click', function () {

    interview_job.classList.remove('hidden')
    total_job.classList.add('hidden')
    rejected_job.classList.add('hidden')

    document.getElementById('interview_btn').classList.add('btn-info')
    document.getElementById('rejected_btn').classList.remove('btn-info')
    document.getElementById('total_btn').classList.remove('btn-info')


    let interview_number = parseInt(document.getElementById('interview').innerText)

    if (interview_number > 0) {
        document.getElementById('job_number').innerText = `${interview_number} of `
    }
    else {
        document.getElementById('job_number').innerText = ""
    }




})
document.getElementById('rejected_btn').addEventListener('click', function () {

    rejected_job.classList.remove('hidden')
    total_job.classList.add('hidden')
    interview_job.classList.add('hidden')

    document.getElementById('rejected_btn').classList.add('btn-info')
    document.getElementById('total_btn').classList.remove('btn-info')
    document.getElementById('interview_btn').classList.remove('btn-info')

    document.getElementById('job_number').innerText = ""

    let reject___number = parseInt(document.getElementById('rejected').innerText)
    if (reject___number > 0) {
        document.getElementById('job_number').innerText = `${reject___number} of `
    }
    else {
        document.getElementById('job_number').innerText = ""
    }


})

let interview_ = document.getElementById('interview')
let interview = parseInt(interview_.innerText)
let rejected_ = document.getElementById('rejected')
let rejected = parseInt(rejected_.innerText)

function update_job(job_class, button_class, update) {

    const job = document.querySelector(`.${job_class}`)
    let status = job.dataset.status

    const test_ = document.querySelector(`.${job_class} .${button_class}`).innerText

    if (test_ == "INTERVIEW") {
        if (status != "interview") {
            document.querySelector(`.${job_class} .${update}`).innerText = "INTERVIEW"
            document.querySelector(`.${job_class} .${update}`).classList.remove('btn-error')
            document.querySelector(`.${job_class} .${update}`).classList.add('btn-success')

            interview = interview + 1
            interview_.innerText = interview
            if (status == "rejected") {
                rejected = rejected - 1
                rejected_.innerText = rejected
            }

            if (interview > 0) {
                document.getElementById('No_interview').classList.add('hidden')
            }
            if (rejected == 0) {
                document.getElementById('No_reject').classList.remove('hidden')
            }

            let job_ = document.querySelector(`#reject_found .${job_class}`)

            if (job_) {
                job_.remove()
            }

            const job = document.querySelector(`.${job_class}`)

            const job_1 = job.cloneNode(true)
            document.getElementById('interview_found').appendChild(job_1)

            job.dataset.status = "interview"
        }
    }
    else if (test_ == "REJECTED") {
        if (status != "rejected") {
            document.querySelector(`.${job_class} .${update}`).innerText = "REJECTED"
            document.querySelector(`.${job_class} .${update}`).classList.remove('btn-success')
            document.querySelector(`.${job_class} .${update}`).classList.add('btn-error')

            if (status == "interview") {
                interview = interview - 1
                interview_.innerText = interview
            }

            rejected = rejected + 1
            rejected_.innerText = rejected

            if (rejected > 0) {
                document.getElementById('No_reject').classList.add('hidden')
            }

            if (interview == 0) {
                document.getElementById('No_interview').classList.remove('hidden')
            }

            let job_ = document.querySelector(`#interview_found .${job_class}`)

            if (job_) {
                job_.remove()
            }

            const job = document.querySelector(`.${job_class}`)
            const job_1 = job.cloneNode(true)
            document.getElementById('reject_found').appendChild(job_1)

            job.dataset.status = "rejected"
        }

    }

}

function delete_job(job_class) {
    const total = document.getElementById('total')
    let total_job = parseInt(total.innerText)
    const job = document.querySelector(`.${job_class}`)
    let status = job.dataset.status

    if (status == "not_applied") {
        job.remove()
        total_job = total_job - 1
        total.innerText = total_job
        document.getElementById('total_job_').innerText = total_job

    }
    else if (status == "interview") {
        interview = interview - 1
        interview_.innerText = interview
        total_job = total_job - 1
        total.innerText = total_job
        document.getElementById('total_job_').innerText = total_job
        job.remove()
        document.querySelector(`#interview_job .${job_class}`).remove()

        if (interview == 0) {
            document.getElementById('No_interview').classList.remove('hidden')
        }


        let interview_number = parseInt(document.getElementById('interview').innerText)

        if (interview_number > 0) {
            document.getElementById('job_number').innerText = `${interview_number} of `
        }
        else {
            document.getElementById('job_number').innerText = ""
        }


    }
    else if (status == "rejected") {
        rejected = rejected - 1
        rejected_.innerText = rejected
        total_job = total_job - 1
        total.innerText = total_job
        document.getElementById('total_job_').innerText = total_job
        job.remove()
        document.querySelector(`#rejected_job .${job_class}`).remove()

        if (rejected == 0) {
            document.getElementById('No_reject').classList.remove('hidden')
        }
        let reject___number = parseInt(document.getElementById('rejected').innerText)
        if (reject___number > 0) {
            document.getElementById('job_number').innerText = `${reject___number} of `
        }
        else {
            document.getElementById('job_number').innerText = ""
        }
    }

}

