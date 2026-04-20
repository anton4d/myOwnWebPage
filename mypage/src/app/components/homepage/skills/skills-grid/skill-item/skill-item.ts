import { Component, Input } from '@angular/core';

@Component({
  selector: 'skill-item',
  imports: [],
  templateUrl: './skill-item.html',
  styleUrl: './skill-item.scss',
})
export class SkillItem {
  @Input() fileName!: string;
  @Input() basePath!: string;
  @Input() name!: string;

  get src(): string {
    return this.basePath + this.fileName;
  }
}
