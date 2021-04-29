import $ from './vendor/jquery-scroll-animations';

export class Headline {

    constructor() {
        // Set animation timing
        this.animationDelay = 2500;
        // Clip effect
        this.revealDuration = 660;
        this.revealAnimationDelay = 1500;
        this.headlines = $('.cd-headline');
    }


    init() {
        // Initialise headline animation
        this.headlines.each((i, headline) => {
            if ($(headline).hasClass('clip')) {
                const spanWrapper = $(headline).find('.cd-words-wrapper');
                spanWrapper.css('width', spanWrapper.width() + 10);
            }

            //trigger animation
            setTimeout(() => {
                this.hideWord($(headline).find('.is-visible').eq(0));
            }, this.animationDelay);
        });

    }

    hideWord($word) {
        const nextWord = this.takeNext($word);

        if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({
                width: '2px'
            }, this.revealDuration, () => {
                this.switchWord($word, nextWord);
                this.showWord(nextWord);
            });

        }
    }

    showWord($word) {
        if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({
                'width': $word.width() + 10
            }, this.revealDuration, () => {
                setTimeout(() => {
                    this.hideWord($word);
                }, this.revealAnimationDelay);
            });
        }
    }


    takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    takePrev($word) {
        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }

    switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }

}
