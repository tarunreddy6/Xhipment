import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  ngOnInit(): void {
    this.getAllStudents();
  }

  // register() {
  //   this.auth.logout();
  // }

  getAllPosts() {

    this.data.getAllStudents().subscribe(res => {

      this.getAllPosts = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })

  }

  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.mobile = '';
  }

  addPost() {
    if (this.first_name == '' || this.last_name == '' || this.mobile == '' || this.email == '') {
      alert('Fill all input fields');
      return;
    }

  }

  updatePost() {

  }

  deletePost(student: Post) {
    if (window.confirm('Are you sure you want to delete ' + post.id + ' ' + student.last_name + ' ?')) {
      this.data.deleteStudent(student);
    }
  }

}