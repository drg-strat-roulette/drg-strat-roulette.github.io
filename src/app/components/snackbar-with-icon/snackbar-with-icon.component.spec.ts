import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackbarWithIconComponent } from './snackbar-with-icon.component';

describe('SnackbarWithIconComponent', () => {
	let component: SnackbarWithIconComponent;
	let fixture: ComponentFixture<SnackbarWithIconComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatIconModule, SnackbarWithIconComponent],
			providers: [
				{
					provide: MAT_SNACK_BAR_DATA,
					useValue: {
						text: 'Sample text',
						prefixIcon: 'settings',
						suffixIcon: 'list',
					},
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(SnackbarWithIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
