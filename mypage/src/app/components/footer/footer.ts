import { Component } from '@angular/core';
import { LucideAngularModule, Github,Linkedin } from 'lucide-angular';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'portfolio-footer',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
    readonly githubIcon = Github;
    readonly linkedinIcon = Linkedin

}
