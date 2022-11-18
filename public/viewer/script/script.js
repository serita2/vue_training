// 子コンポーネント
const imageThumbnail = {
    props: {
        path: {
            type: String,
            default: ''
        }
    },
    template: `<div class="img-box" :style="{backgroundImage: 'url(' + path + ')'}" @click="$emit('clickimage')"></div>`
};

const modal = {
    props: {
        isShown: {
            type: Boolean,
            default:false
        },
        imagePath: {
            type:String,
            default: ''
        }
    },
    template: `
        <div v-if="isShown" class="modal" @click="$emit('close')"><img class="modal-img" :src="imagePath" alt="selectedImage"/></div>
    `
};

// 親コンポーネント(ルートコンポーネント)
const app = Vue.createApp({
    components: {
        'image-thumbnail': imageThumbnail,
        modal //オブジェクトのプロパティ名と値が一緒なため省略記法
    },
    data() {
        return {
            isShown:false,
            selectedImage: '',
            images: [{
                path: 'viewer/img/img1.svg',
            },{
                path: 'viewer/img/img2.svg',
            },{
                path: 'viewer/img/img3.svg',
            },{
                path: 'viewer/img/img4.svg',
            },{
                path: 'viewer/img/img5.svg',
            },{
                path: 'viewer/img/img6.svg',
            },{
                path: 'viewer/img/img7.svg',
            },{
                path: 'viewer/img/img8.svg',
            },{
                path: 'viewer/img/img9.svg',
            }]
        }
    },
    methods: {
        onSelectImage(path) {
            this.setImage(path);
            this.openModal();
        },
        openModal() {
            this.isShown = true;
        },
        closeModal() {
            this.isShown = false;
        },
        setImage(path) {
            this.selectedImage = path;
        }
    }
}).mount('#app')

