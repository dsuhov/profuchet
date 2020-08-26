import $ from "jquery";
import magnificPopup from "magnific-popup";

class Quiz {
  
  constructor(rootId) {
    this.rootNode = $(rootId);
    this.finalBlock = this.rootNode.find(".quiz-questions__block-final");
    this.nextBtn = this.rootNode.find(".quiz-controls__btn");
    this.prevBtn = this.rootNode.find(".quiz-controls__btn-return");
    this.stepsNum = this.rootNode.find(".quiz-steps__current-num");
    
    this.scaleItems = this.rootNode.find(".quiz-steps__scale-item");
    this.blocks = this.rootNode.find(".quiz-questions__block");
    
    this.currStep = 0;
    this.textLength = 4;
    this.timeoutID = null;
    

    // this.blocks.hide();
    // this.rootNode.find('.quiz__steps').hide();
    // this.rootNode.find('.quiz__steps').hide();
    // this.rootNode.find('.quiz__controls').hide();
    // this.rootNode.find('.quiz__r-side').hide();
    // this.finalBlock.show();
    this.run();
  }


  
  events() {
    this.nextBtn.on('click', () => this.stepNext());
    this.prevBtn.on('click', () => this.prevStep());
    this.rootNode.find('.quiz-questions').on('click', '.quiz-questions__input', () => {
      const timeoutIDnew = setTimeout(() => this.stepNext(), 300);

      if (this.timeoutID == null) {
        this.timeoutID = timeoutIDnew;
      } else {
        if (this.timeoutID) clearTimeout(this.timeoutID);
        this.timeoutID = timeoutIDnew;
      }
    })
  }
  
  run() {
    this.showBlock();
    this.finalBlock.hide();
    this.events();
  }
  
  stepNext() {
    this.currStep++;
    this.timeoutID = null;
    
    if (this.currStep > this.textLength) {
      this.finalizeTest();
    } else {
      this.showBlock();
      this.updateStepTitle();
      this.updateStepScale();
      this.checkPrevBtnInterval();
    }
  }
  
  prevStep() {
    if (this.currStep > 0) {
      this.currStep--;
      this.showBlock();
      this.updateStepTitle();
      this.updateStepScale();
      this.checkPrevBtnInterval();
    }
  }
  
  showBlock() {
    this.blocks.hide();
    $(this.blocks[this.currStep]).show();
  }
  
  showPrevBtn() {
    if (this.prevBtn.hasClass('quiz-controls__btn-return--hidden')) {
      this.prevBtn.removeClass('quiz-controls__btn-return--hidden');
    }
  }
  
  hidePrevBtn() {
    if (!this.prevBtn.hasClass('quiz-controls__btn-return--hidden')) {
      this.prevBtn.addClass('quiz-controls__btn-return--hidden');
    }
  }
  
  updateStepTitle() {
    this.stepsNum.html(this.currStep + 1);
  }
  
  updateStepScale() {
    this.scaleItems.removeClass('quiz-steps__scale-item--active');
    $(this.scaleItems[this.currStep]).addClass('quiz-steps__scale-item--active');
  }
  
  checkPrevBtnInterval() {
    if (this.currStep > 0 && this.currStep <= this.textLength) {
      this.showPrevBtn();
    } else {
      this.hidePrevBtn();
    }
  }
  
  finalizeTest() {
    this.blocks.hide();
    // this.rootNode.find('.quiz__steps').hide();
    this.rootNode.find('.quiz__steps').hide();
    this.rootNode.find('.quiz__controls').hide();
    this.rootNode.find('.quiz__r-side').hide();
    this.rootNode.find('.quiz-questions__load-block').show();
    
    // this.finalBlock.show();
    const loadingBar = this.rootNode.find('.quiz-questions-loading__inner-bar');
    const listItems = this.rootNode.find(".quiz-questions-loading__list-item");

    let newWidth = 25;
    let newTime = 500;

    for (let i = 0; i < 4; i++) {
      // barTick(newTime, newWidth, i);
      barTick.call(this, newTime, newWidth, i, listItems[i])

      newWidth += 25;
      newTime += 1000;
    }

    function barTick(time, width, tick, litem) {
      setTimeout(() => {
        loadingBar.css("width", `${width}%`);
        
        setTimeout(() => {
          litem.classList.add("quiz-questions-loading__list-item--active");
          
        }, 300);
      }, time);

      if (tick === 3) {
        setTimeout(() => {
          this.rootNode.find('.quiz-questions__load-block').hide();
          this.finalBlock.show();
          this.rootNode.find('.block-final__input-wrapper').addClass("block-final__input-wrapper--show");
          this.rootNode.find('.block-final__inputs-line').addClass("block-final__inputs-line--active");
        }, time + 1000);
      }
    }
  }
}

$(document).ready(function() {

  if (document.querySelector("#quiz-desktop")) {
    const quizMain = new Quiz("#quiz-desktop");
    const quizPopup = new Quiz("#quiz-popup");
    // POPUP
    $('.yellow-btn--s-top').magnificPopup({
      showCloseBtn: false,
      items: {
        src: '#popup-quiz',
        type: 'inline'
      }
    });
    
    $('.yellow-btn--adv').magnificPopup({
      showCloseBtn: false,
      items: {
        src: '#popup-quiz',
        type: 'inline'
      }
    });

    $('.yellow-btn--adv').on('mfpClose', function(e /*, params */) {
      setTimeout(() => {
        $.magnificPopup.open({
          items: {
            src: '#exit-popup'
          },
          // type: 'inline',
          showCloseBtn: false
        });
      }, 300)
    });
  }
  
});
