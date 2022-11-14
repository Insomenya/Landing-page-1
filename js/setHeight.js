function setHeight(arr, heightPercentage){
    Array.prototype.forEach.call(arr, arrElement => {
        let elementWidth = arrElement.offsetWidth;
        arrElement.setAttribute("style", "height:" + (elementWidth * heightPercentage) + "px");
    });
}

document.addEventListener("DOMContentLoaded", function(){
    let featureImages = document.getElementsByClassName("feature__outline");
    let standardImage = document.getElementsByClassName("standards__img");
    let jobTypeImages = document.getElementsByClassName("job-type__thumbnail");
    let projectImages = document.getElementsByClassName("project");

    setHeight(featureImages, 1);
    setHeight(standardImage, 0.8);
    setHeight(jobTypeImages, 0.85);
    setHeight(projectImages, 1);
});