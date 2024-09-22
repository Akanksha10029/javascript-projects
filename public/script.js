let progress = 0;
const totalGoals = 3;
const progressBar = document.getElementById('progress_bar');
const goalStatus = document.getElementById('goal-status');
const set_all_three = document.getElementById('set_all_three');
const three_goals =document.querySelectorAll('.three-goals')
const customCheckboxes = document.querySelectorAll('.custom-checkbox');
const goalInputs = document.querySelectorAll('.goal-input');

let completedGoals = 0; // Track the number of completed goals

// Divs to display goal completion
const goalCompletedMessages = [
    document.getElementById('goal1-completed'),
    document.getElementById('goal2-completed'),
    document.getElementById('goal3-completed')
];

// Attach event listeners to custom checkboxes

// Loop through each checkbox
customCheckboxes.forEach((checkbox, index) => {
    // Add a click event listener to each checkbox
    checkbox.addEventListener('click', function () {
        // Check if the associated input field has any text
        if (goalInputs[index].value.trim() !== "") {
            // Toggle the background color to green if clicked and input is not empty
            this.classList.toggle('bg-green-700');
            updateProgress(this, index);
            
            // Toggle line-through style for the associated input field
            goalInputs[index].classList.toggle('line-through');
            goalInputs[index].classList.toggle('text-gray-500');

            // Show/hide the corresponding "Goal completed" message
            if (this.classList.contains('bg-green-700')) {
                goalCompletedMessages[index].classList.remove('hidden');
            } else {
                goalCompletedMessages[index].classList.add('hidden');
            }

        } else {
            // If input is empty, do nothing (or we can show an alert/message)
            alert("Please write something in the goal before marking it as complete!");
        }
    });
});





// Attach event listeners to each goal button
// document.getElementById('goal1').addEventListener('click', function() { updateProgress(this); });
// document.getElementById('goal2').addEventListener('click', function() { updateProgress(this); });
// document.getElementById('goal3').addEventListener('click', function() { updateProgress(this); });



function updateProgress(checkbox) {
    if (checkbox.classList.contains('bg-green-700')) {
        completedGoals++; // Incrementing when the checkbox is checked
    } else {
        completedGoals--; // Decrementing0 when the checkbox is unchecked
    }

    progress = (completedGoals / totalGoals) * 100; // Updating the progress based on completed goals
    progressBar.style.width = progress + '%';
    
    progressBar.textContent = `${completedGoals} / ${totalGoals} completed`;

    // Toggle the visibility of the final message
    if (completedGoals === totalGoals) {
        set_all_three.classList.add('hidden'); 
        goalStatus.classList.remove('hidden'); // Show completion message
    } else {
        set_all_three.classList.remove('hidden');
        goalStatus.classList.add('hidden'); // Hide completion message
    }
}





// function updateProgress(button) {
//     if (!button.disabled) { // Check if the button is not already pressed
//         completedGoals++;
//         progress += 100 / totalGoals; // Increment progress by one-third
//         progressBar.style.width = progress + '%';
//         button.disabled = true; // Disable the button after it's clicked to prevent multiple clicks

//         progressBar.textContent = `
//         ${completedGoals} / ${totalGoals} completed`
        
        
//         if(completedGoals!=totalGoals){
//             set_all_three.classList.remove('hidden')
//         }

//         else{
//             set_all_three.classList.add('hidden')
//             // Showing completion message when all goals are completed
//             goalStatus.classList.remove('hidden')
//         }
//     }    

// }