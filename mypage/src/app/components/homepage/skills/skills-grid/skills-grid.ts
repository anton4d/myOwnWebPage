import { Component, Input } from '@angular/core';

import { SkillGroup } from '@Types';
import { SkillItem } from './skill-item/skill-item';


@Component({
  selector: 'skills-grid',
  imports: [SkillItem],
  templateUrl: './skills-grid.html',
  styleUrl: './skills-grid.scss',
})
export class SkillsGrid {
  @Input() groups!: SkillGroup[];
}
