let total_job = document.getElementById('total_job')
let interview_job = document.getElementById('interview_job')
let rejected_job = document.getElementById('rejected_job')
interview_job.classList.add('hidden')
rejected_job.classList.add('hidden')

document.getElementById('total_btn').addEventListener('click', function () {

    total_job.classList.remove('hidden')
    interview_job.classList.add('hidden')
    rejected_job.classList.add('hidden')

    document.getElementById('total_btn').classList.add('btn-info')
    document.getElementById('interview_btn').classList.remove('btn-info')
    document.getElementById('rejected_btn').classList.remove('btn-info')

})
document.getElementById('interview_btn').addEventListener('click', function () {

    interview_job.classList.remove('hidden')
    total_job.classList.add('hidden')
    rejected_job.classList.add('hidden')

    document.getElementById('interview_btn').classList.add('btn-info')
    document.getElementById('rejected_btn').classList.remove('btn-info')
    document.getElementById('total_btn').classList.remove('btn-info')


})
document.getElementById('rejected_btn').addEventListener('click', function () {

    rejected_job.classList.remove('hidden')
    total_job.classList.add('hidden')
    interview_job.classList.add('hidden')

    document.getElementById('rejected_btn').classList.add('btn-info')
    document.getElementById('total_btn').classList.remove('btn-info')
    document.getElementById('interview_btn').classList.remove('btn-info')
})

let interview_ = document.getElementById('interview')
let interview = parseInt(interview_.innerText)
let rejected_ = document.getElementById('rejected')
let rejected = parseInt(rejected_.innerText)

function update_job(job_class, button_class, update) {
    const test_ = document.querySelector(`.${job_class} .${button_class}`).innerText

    if (test_ == "INTERVIEW") {
        document.querySelector(`.${job_class} .${update}`).innerText = "INTERVIEW"
        document.querySelector(`.${job_class} .${update}`).classList.add('btn-success')

        interview = interview + 1
        interview_.innerText = interview
        if (rejected > 0) {
            rejected = rejected - 1
            rejected_.innerText = rejected
        }

        if (interview > 0) {
            document.getElementById('No_interview').classList.add('hidden')
        }

        if (rejected == 0) {
            document.getElementById('No_reject').classList.remove('hidden')
        }

        // document.getElementById('total_jobs__').classList.add('hidden')
        // document.getElementById('total_interview').classList.remove('hidden').innerText = `${interview} of 8 jobs`
        // document.getElementById('total_jobs_number').classList.add('hidden')

        const job = document.querySelector(`.${job_class}`)
        // const job_1 = job.cloneNode(true)
        // document.getElementById('interview_found').appendChild(job_1)
        document.getElementById('interview_found').appendChild(job)
    }
    else if (test_ == "REJECTED") {
        document.querySelector(`.${job_class} .${update}`).innerText = "REJECTED"
        document.querySelector(`.${job_class} .${update}`).classList.add('btn-error',)

        if (interview > 0) {
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

        const job = document.querySelector(`.${job_class}`)
        // const job_1 = job.cloneNode(true)
        // document.getElementById('reject_found').appendChild(job_1)
        document.getElementById('reject_found').appendChild(job)

    }

    console.log(test_)

}

