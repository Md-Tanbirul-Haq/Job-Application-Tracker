let total_job = document.getElementById('total_job')
let interview_job = document.getElementById('interview_job')
let rejected_job = document.getElementById('rejected_job')
interview_job.classList.add('hidden')
rejected_job.classList.add('hidden')
// total_job.classList.add('hidden')
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
document.getElementById('interview_1').addEventListener('click', function () {

    let update = document.getElementById('update_1')
    update.innerText = "INTERVIEW"
    interview = interview + 1
    interview_.innerText = interview
    if (rejected > 0) {
        rejected = rejected - 1
        rejected_.innerText = rejected
    }

    let job = document.getElementById('job_1')
    console.log(job.innerHTML)


})
document.getElementById('rejected_1').addEventListener('click', function () {

    let update = document.getElementById('update_1')
    update.innerText = "REJECTED"

    if (interview > 0) {
        interview = interview - 1
        interview_.innerText = interview
    }

    rejected = rejected + 1
    rejected_.innerText = rejected

})
