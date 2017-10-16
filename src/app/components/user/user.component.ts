import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit: boolean= false;

  constructor(private dataService: DataService) {
    console.log('constructor ran..');
   }


  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'Alan';
    this.age = 31;
    this.email = 'alan@alan.com';
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = ['Write code', 'Watch Movies', 'Listen to music'];
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

    onClick(event) {
      console.log('Hello!');
      console.log(event);
      this.name = 'Brad Pasley';
      this.hobbies.push('New Name');
    }
    addHobby(hobby) {
      console.log(hobby);
      this.hobbies.unshift(hobby);
      return false;
    }
    deleteHobby(hobby) {
      console.log(hobby);
      for (let i = 0; i < this.hobbies.length; i ++) {
        if (this.hobbies[i] === hobby) {
          this.hobbies.splice(i, 1);
        }
      }
    }
    toggleEdit() {
      this.isEdit = !this.isEdit;
    }

}


interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post  {
  id: number;
  title: string;
  body: string;
  userId: number;
}
