import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { error } from 'console';

@Injectable()
export class UserService {
  private users = [
  {
    id: 1,
    first_name: "Pennie",
    last_name: "Mendes",
    email: "pmendes0@mozilla.org",
    gender: "Male"
  },
  {
    id: 2,
    first_name: "Mella",
    last_name: "Denyagin",
    email: "mdenyagin1@psu.edu",
    gender: "Female"
  },
  {
    id: 3,
    first_name: "Keelby",
    last_name: "Kehri",
    email: "kkehri2@ovh.net",
    gender: "Male"
  },
  {
    id: 4,
    first_name: "Cindra",
    last_name: "Scrivenor",
    email: "cscrivenor3@fc2.com",
    gender: "Female"
  },
  {
    id: 5,
    first_name: "Cullin",
    last_name: "Fyers",
    email: "cfyers4@state.gov",
    gender: "Male"
  },
  {
    id: 6,
    first_name: "Ahmed",
    last_name: "Harrold",
    email: "aharrold5@geocities.com",
    gender: "Male"
  },
  {
    id: 7,
    first_name: "Philip",
    last_name: "Sedgman",
    email: "psedgman6@odnoklassniki.ru",
    gender: "Male"
  },
  {
    id: 8,
    first_name: "Garvin",
    last_name: "Murrock",
    email: "gmurrock7@wired.com",
    gender: "Male"
  },
  {
    id: 9,
    first_name: "Cesar",
    last_name: "Perago",
    email: "cperago8@homestead.com",
    gender: "Male"
  },
  {
    id: 10,
    first_name: "Peri",
    last_name: "Bertome",
    email: "pbertome9@github.io",
    gender: "Genderqueer"
  }
]
  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto)
    return "user created !"
  }


  findAll() {
    return this.users
  }

  findOne(id: number) {
    let user =this.users.find(user =>user.id === id)
    if (!user) {
      throw new Error()
    }
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map(user => {
      if (user.id === id) {
        return {...user,...updateUserDto}
      }
      return user
    })
    return "user updated !"
  }

  remove(id: number) {
    this.users = this.users.map(user => {
      if (user.id !== id) {
        return user
      }
    })
    return "user deleted !"
  }
}
