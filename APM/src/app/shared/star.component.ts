import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

// This is a
@Component({
    // Name of the component basically
    selector: 'pm-star',
    // Get the html template, also possible to enter html directly
    templateUrl: './star.component.html',
    // This is for style URLS: could also just do hardcoded style with styles
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    // To bind a value from the parent component
    @Input() rating: number = 0;
    cropWidth = 75;

    // Create event emitter to send data to parent component
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        console.log('pm-star In OnChanges')
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
    }
}