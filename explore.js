var img_img = document.getElementById("img-img");
var txt_img = document.getElementById("txt-img");
var blk_img = document.getElementById("blk-img");
var img_q = document.getElementById("img-q");
var txt_q = document.getElementById("txt-q");
var blk_q = document.getElementById("blk-q");
var img_choices_wrapper = document.getElementById("img-choices-wrapper");

const update_q = (type, id) => {
    if (type === "img") {
        img_img.src = CHOOSE_IMAGE_LS[id].path + "/image.png";
        img_q.innerHTML = "<strong>Question: </strong>" + CHOOSE_IMAGE_LS[id].question;
        img_choices_wrapper.innerHTML = create_img_choices(id);
    } else if (type === "txt") {
        txt_img.src = CHOOSE_TEXT_LS[id].path + "/image.png";
        txt_q.innerHTML = "<strong>Question: </strong>" + CHOOSE_TEXT_LS[id].question;
    } else {
        blk_img.src = FILL_IN_BLANK_LS[id].path + "/image.png";
        blk_q.innerHTML = "<strong>Question: </strong>" + FILL_IN_BLANK_LS[id].question
    }
}

const create_img_choices = (id) => {
    var str = "";
    for (let i = 0; i < CHOOSE_IMAGE_LS[id].choices.length; i++) {
        path = CHOOSE_IMAGE_LS[id].path + "/" + CHOOSE_IMAGE_LS[id].choices[i];
        str += `<img class="img-choice" src="${path}">`;
    }
    return str;
}



var img_id, txt_id, blk_id;
img_id = txt_id = blk_id = 0;
update_q("img", img_id);
update_q("txt", txt_id);
update_q("blk", blk_id);

var img_next = document.getElementById("img-next");
img_next.addEventListener("click", () => {
    img_id++;
    if (img_id >= CHOOSE_IMAGE_LS.length)
        img_id = 0;
    update_q("img", img_id);
});

var txt_next = document.getElementById("txt-next");
txt_next.addEventListener("click", () => {
    txt_id++;
    if (txt_id >= CHOOSE_TEXT_LS.length)
        txt_id = 0;
    update_q("txt", txt_id);
});

var blk_next = document.getElementById("blk-next");
blk_next.addEventListener("click", () => {
    blk_id++;
    if (blk_id >= FILL_IN_BLANK_LS.length)
        blk_id = 0;
    update_q("blk", blk_id);
});


////////////////////////
// Layout choose_img
//////////////////////// 


