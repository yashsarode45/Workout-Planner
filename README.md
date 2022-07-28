
# Workout Planner
Web-based app to track the exercises and their intensity in terms of reps and sets.
It is integrated with a Django user authentication system where a registered user can log in easily
and a new user can be registered on the platform.
Appropriate alerts and nudges are displayed wherever necessary
to guide the user on the platform.

## Motive
- Being a fitness enthusiast and having done a physical transformation all by myself, I felt the need to use tech in order to help people like me keep a track of exercises and the workout plan instead of trying to recall every time what is the next set of exercises for the day. 
- When you are halfway through the workout and are already fatigued it becomes a daunting task to recall the remaining workout let alone the remaining sets of the same exercise, so to avoid this and constantly bothering the floor trainers, the remaining exercises could be easily tracked using the app.


## Demo

![Workout-Planner-28-July-2022](https://user-images.githubusercontent.com/65209607/181459318-c48be352-e93e-433e-88a7-ce83cf28bc75.gif)

![Workout-Planner-28-July-2022-1](https://user-images.githubusercontent.com/65209607/181463276-7339d71f-09d2-47fe-85fa-25a2a569db54.gif)
- Django is used to create a user authentication system that uses the SQLite database to register users.
- React frontend is interfaced within the Django project, after the user is authenticated it redirects to the react home page.
- Django Crispy forms and Bootstrap is used to create register and login pages.
- When the URL is rendered, it checks whether the user is authenticated or not, and then it decides whether to redirect to the login page or load the home page.
- If the user enters invalid credentials then an alert is displayed which asks to try again, similarly when the user successfully logs in or logs out a message is displayed.
- For the registration form, once the user clicks the register button, it checks if the username is already taken also checks the password with the mentioned conditions, and displays an alert accordingly.
- The app dashboard accepts exercise name and the number of sets and reps, if the user enters text as input for sets and reps it displays an alert to enter the correct format that is a number.
- The exercises can be added or deleted accordingly. 
