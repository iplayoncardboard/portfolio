import { Component, OnInit } from '@angular/core';
import { WorkCard } from '../interfaces/component.interfaces';
import { ProjectData } from './data';

@Component({
  selector: 'app-dev-work',
  templateUrl: './dev-work.component.html',
  styleUrls: ['./dev-work.component.css']
})
export class DevWorkComponent implements OnInit {
  projects: WorkCard[] = ProjectData;

  constructor() { }

  ngOnInit(): void {
  }



}
