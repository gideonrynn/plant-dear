# plant-dear
Track plant care requirements, weather conditions and daily routine to help care for our leafy friends.



# Setup

1. Once logged in with [GitHub account](https://github.login/), clone the repo locally using link:

  ```sh
    git clone https://github.com/gideonrynn/plant-dear.git
  ```

2. Install dependencies:
```sh
  npm i
```


Also see: [Cloning a repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

# User Story

As a container gardener
I want to track care and maintenance requirements for each plant
and weather for upcoming weather conditions
to develop the best care routine for my indoor and outdoor plants


# Usage

Plant Dear is an application that tracks care conditions for each plant measured against data returned by WeatherBit to suggest the care routine for the day. 

A user is able to enter the following data:
- high temp
- low temp
- water intake
- sunlight preferences
- indoor or outdoor plant
- soil requirements
- cycle (annual, perennial, biennial)
- plant hardiness zone
- (optional) photos for tracking plant growth

WeatherBit includes forecast data so that a user may plan ahead for maintaining care for maintaining plants. User will receive email when forecast conditions appear to be unfavorable for outdoor plants to fit certain criteria.


# Technologies

This project built using:

  - Node
  - [Dotenv ^16.0.0](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file into process.env
  - [Express ^4.17.3](https://www.npmjs.com/package/express)
  - [Mongoose ^6.0.7](https://www.npmjs.com/package/mongoose)
  - [React ^17.0.0](https://www.npmjs.com/package/react)
  - [React Router Dom ^5.1.12](https://www.npmjs.com/package/react-router-dom)
  - [WeatherBit](https://www.weatherbit.io/)


# License

This project uses the MIT License. See the full details here: https://choosealicense.com/licenses/mit/ 

