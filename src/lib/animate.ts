// animate.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

type AnimationType = keyof typeof gsap;

interface AnimationOptions extends GSAPTweenVars {
	type: AnimationType;
	scrollTrigger?: ScrollTrigger.Vars;
}

export interface AnimationPreset extends AnimationOptions {}

// Define animation presets
export const animationPresets: Record<string, AnimationPreset> = {
	fadeInUp: {
		type: 'from',
		duration: 0.8,
		opacity: 0,
		yPercent: 100,
		ease: 'power4.out'
	},
	fadeInDown: {
		type: 'from',
		duration: 0.8,
		opacity: 0,
		yPercent: -100,
		ease: 'power4.out'
	},
	fadeInLeft: {
		type: 'from',
		duration: 0.8,
		opacity: 0,
		xPercent: -100,
		ease: 'power4.out'
	},
	fadeInRight: {
		type: 'from',
		duration: 0.8,
		opacity: 0,
		xPercent: 100,
		ease: 'power4.out'
	},
	scaleIn: {
		type: 'from',
		duration: 0.6,
		opacity: 0,
		scale: 0.8,
		ease: 'back.out'
	},
	slideInUp: {
		type: 'from',
		duration: 1,
		yPercent: 100,
		ease: 'power4.out',
		scrollTrigger: {
			start: 'top 70%',
			end: 'top 20%',
			toggleActions: 'play none none reverse'
		}
	}
};

export function animate(
	node: HTMLElement,
	options: AnimationOptions | string
): { destroy?: () => void } {
	// If options is a string, look it up in presets
	const config = typeof options === 'string' ? animationPresets[options] : options;

	if (!config) {
		console.warn(`Animation preset or config "${options}" not found.`);
		return {};
	}

	const { type, scrollTrigger, ...args } = config;

	const method = gsap[type] as
		| ((target: gsap.TweenTarget, vars: GSAPTweenVars) => GSAPTween)
		| undefined;

	if (!method) {
		console.warn(`GSAP method "${type}" does not exist.`);
		return {};
	}

	// Create the animation with ScrollTrigger if provided
	const tween = method(node, {
		...args,
		scrollTrigger: scrollTrigger
			? {
					...scrollTrigger,
					trigger: scrollTrigger.trigger || node
				}
			: undefined
	});

	return {
		destroy() {
			// Kill the animation when the element is removed
			tween.kill();

			// If using ScrollTrigger, make sure to kill that instance too
			if (scrollTrigger && tween.scrollTrigger) {
				tween.scrollTrigger.kill();
			}
		}
	};
}
