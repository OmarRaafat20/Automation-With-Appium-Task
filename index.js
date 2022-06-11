describe('First Requirement , Second Requirement', function () {

    // ### 1. Write a test to click on "تصفح كزائر" button
    it('should click on (تصفح كزائر)  successfully', function () {

        const Guest_Button = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView';
        $(Guest_Button).click();
        console.log('clicked on (تصفح كزائر) button clicked successfully');
    });

    //### 2. Check if this page was loaded successfully
    it('should Display (مرحلتك الدراسيه)  successfully', function () {

        const Guest_Button = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView';
        $(Guest_Button).displayed();
        console.log('Page Loaded Successfully');
    });

});

//Anything extra you do will be a bonus :) .
describe('Enter Your Phone Number', function () {


    it('Should Click On (سجل عبر رقم الجوال) Successfully', function () {
        const NumberRegisterButton = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup';
        $(NumberRegisterButton).click();
        console.log('Successfully Presed On (سجل عبر رقم الجوال)');
    });


    it('Should Click on Countryes To Select Country Successfully', function () {
        const CountrySelections = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ImageView';
        $(CountrySelections).click();
        console.log('Successfully Presed On Countryes');
    });

    it('Should Select Egypt Successfully', function () {
        const SelectEgypt = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView[2]';
        $(SelectEgypt).click();
        console.log(' Selecte Egypt');
    });

    it('Should Click On Input Number Filed Successfully and enter the Number', function () {
        const InputNumberFiled = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.EditText';
        $(InputNumberFiled).click()
        $(InputNumberFiled).setValue('01015080473');
        console.log('Successfully Entered Number ');


    });

});


