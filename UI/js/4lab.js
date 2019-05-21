;(function(){
    let photoPosts=[
    {
        id: '1',
        descriprion: 'Тут типа описание.',
        createdAt: new Date('2019-03-09T23:45:00'),
        author: 'Лежайко Олег',
        photoLink: 'https://cs9.pikabu.ru/post_img/big/2017/10/09/10/150756952915024016.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '2',
        descriprion: 'Тут типа опять описание.',
        createdAt: new Date('2019-03-09T23:46:00'),
        author: 'Сукач Иван',
        photoLink: 'http://cp16.nevsepic.com.ua/post/13/139_files/portrety.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '3',
        descriprion: 'Тут типа опять описание.',
        createdAt: new Date('2019-03-09T23:47:00'),
        author: 'Сукач Иван',
        photoLink: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525377294_1444937097_wallpaper_768x1280_5_39.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '4',
        descriprion: 'Тут типа опять описание.',
        createdAt: new Date('2019-03-10T20:36:00'),
        author: 'Борисевич Даша',
        photoLink: 'http://interesno.cc/uploads/tumb/title/201606/dmitryageev22_tumb_660.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '5',
        descriprion: 'Тут типа опять описание.',
        createdAt: new Date('2019-03-09T23:47:00'),
        author: 'Лежайко Олег',
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/985144/b02f6408-87ff-4ef9-bfec-186aee52afa5/s375',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '6',
        descriprion: 'Тут типа опять описание.',
        createdAt: new Date('2019-03-09T23:47:00'),
        author: 'Никита Цуранов',
        photoLink: 'http://cp16.nevsepic.com.ua/post/13/139_files/portrety.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '7',
        descriprion: 'Тут типа опять описание.',
        createdAt: new Date('2019-03-09T23:47:00'),
        author: 'Никита Цуранов',
        photoLink: 'http://cp16.nevsepic.com.ua/post/13/139_files/portrety.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '8',
        descriprion: 'Тут типа опять описание.',
        createdAt: new Date('2019-03-09T23:47:00'),
        author: 'Юля Романова',
        photoLink: 'http://cp16.nevsepic.com.ua/post/13/139_files/portrety.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '9',
        descriprion: 'Тут типа опять описание.',
        createdAt: new Date('2019-03-09T23:47:00'),
        author: 'Аркадий Ефремов',
        photoLink: 'https://i.uaportal.com/gallery/2019/3/7/2.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '10',
        descriprion: 'Тут типа опять описание.',
        createdAt: new Date('2019-03-09T23:47:00'),
        author: 'Плащинский Алексей',
        photoLink: 'http://cp16.nevsepic.com.ua/post/13/139_files/portrety.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '11',
        descriprion: 'Тут типа еще одно описание.',
        createdAt: new Date('2019-03-11T23:33:00'),
        author: 'Плащинский Алексей',
        photoLink: 'http://cp16.nevsepic.com.ua/post/13/139_files/portrety.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
       id: '12',
       descriprion: 'Тут типа еще одно описание.',
       createdAt: new Date('2019-03-11T23:47:00'),
       author: 'Плащинский Алексей',
       photoLink: 'http://cp16.nevsepic.com.ua/post/13/139_files/portrety.jpg',
       hashTags: ['#олд','#228'],
       likes: ['Иэн Кертис','Сукач Иван']
      },
      {
        id: '13',
        descriprion: 'Тут типа еще одно описание.',
        createdAt: new Date('2019-03-12T13:47:00'),
        author: 'Агния Огонек',
        photoLink: 'http://cp16.nevsepic.com.ua/post/13/139_files/portrety.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '14',
        descriprion: 'Тут типа еще одно описание.',
        createdAt: new Date('2019-03-14T12:47:00'),
        author: 'Куртка Бейн',
        photoLink: 'http://stuki-druki.com/aforizms/Kurt%20Cobain02.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис']
       },
       {
        id: '15',
        descriprion: 'Тут типа еще одно описание.',
        createdAt: new Date('2019-03-15T15:27:00'),
        author: 'Дэвид Боуи',
        photoLink: 'https://posmotre.li/images/thumb/c/c1/David_Bowie_1987.jpg/240px-David_Bowie_1987.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '16',
        descriprion: 'Тут типа еще одно описание.',
        createdAt: new Date('2019-03-16T19:44:00'),
        author: 'Илья Мэддисон',
        photoLink: 'https://pp.userapi.com/c625321/v625321612/4e659/iWU2LbtJAWM.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '17',
        descriprion: 'Когда же это уже закончится.',
        createdAt: new Date('2019-03-17T23:47:00'),
        author: 'Иэн Кертис',
        photoLink: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_609961.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Куртка Бейн']
       },
       {
        id: '18',
        descriprion: 'Ляляляля.',
        createdAt: new Date('2019-03-20T13:47:00'),
        author: 'Игги Поп',
        photoLink: 'http://stuki-druki.com/aforizms/Iggy%20Pop02.jpg',
        hashTags: ['#олд','#228'],
        likes: ['Иэн Кертис','Сукач Иван']
       },
       {
        id: '19',
        descriprion: 'То, что ложно в силу демонстративного доказательства,'+
        ' заключает в себе противоречие, а то, что заключает в себе противоречие,'+
        ' невозможно представить. Но когда речь идет о чём-либо фактическом, то, каким'+
        ' бы сильным ни было доказательство из опыта, я всегда могу вообразить противоположное, хотя не всегда могу поверить в него',
        createdAt: new Date('2019-03-21T03:47:00'),
        author: 'Дэвид Юм',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/David_Hume_Ramsay.jpg/267px-David_Hume_Ramsay.jpg',
        hashTags: ['#познание','#ыыы'],
        likes: ['Иммануил Кант']
       },
       {
        id: '20',
        descriprion: 'Знание даётся путём синтеза категорий и наблюдений',
        createdAt: new Date('2019-03-19T23:48:00'),
        author: 'Иммануил Кант',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kant_gemaelde_3.jpg/401px-Kant_gemaelde_3.jpg',
        hashTags: ['#познание','#опыт'],
        likes: ['Артем Щербицкий']
       }
]
function comp(a,b){
    return a.createdAt-b.createdAt;
}
function getPhotoPost(id){
    for(let i=0;i<photoPosts.length;i++){
        if(photoPosts[i].id===id) return photoPosts[i];
    }
}
function getPhotoPosts(skip,top,obj={}){
    if(skip===undefined) skip=0;
    if(top===undefined) top=10;
    let pp=[];
    for(let i=0;i<photoPosts.length;i++){
        if((obj.createdAt===undefined||obj.createdAt===photoPosts[i].createdAt)&&(obj.author===undefined||obj.author===photoPosts[i].author)){
            if(obj.hashTags===undefined){
                pp.push(photoPosts[i]);
            }
            else {
                let count=0;
                for(let j=0;j<photoPosts[i].hashTags.length;j++){
                    for(let k=0;k<obj.hashTags.length;k++){
                        if(photoPosts[i].hashTags[j]===obj.hashTags[k]) count++;
                    }
                }
                if(count===obj.hashTags.length){
                    pp.push(photoPosts[i]);
                }
            }
        }
    }
    pp.sort(comp);
    if(pp.length<=skip) return null;
    let sortedpp=[];
    let min=0;
    if(pp.length<skip+top){
        min=pp.length;
    }
    else min=skip+top;
    for(let i=skip;i<min;i++){
        sortedpp.push(pp[i])
    }
    return sortedpp;
}
function validatePhotoPost(photoPost){
    if(typeof(photoPost.id)!=='string') return false;
    if(typeof(photoPost.descriprion)!=='string'||photoPost.descriprion.length>200) return false;
    if(!(photoPost.createdAt instanceof Date)) return false;
    if(typeof(photoPost.author)!=='string'||photoPost.author.length===0) return false;
    if(typeof(photoPost.photoLink)!=='string'||photoPost.photoLink.length===0) return false;
    if(typeof(photoPost.hashTags)!=='object') {
        for(let i=0;i<photoPost.hashTags.length;i++){
            if(typeof(photoPost.hashTags[i])!=='string') return false;
        }
    }
    if(typeof(photoPost.likes)!=='object'){
        for(let i=0;i<photoPost.likes.length;i++){
            if(typeof(photoPost.likes[i])!=='string') return false;
        }
    }
    return true;
}
function addPhotoPost(photoPost){
    if(!validatePhotoPost(photoPost)) return false;
    for(let i=0;i<photoPosts.length;i++){
        if(photoPosts[i].id===photoPost.id) return false;
    }
    photoPosts.push(photoPost);
    return true;
}
function editPhotoPost(id,photoPost){
    let edit=Object.assign({}, getPhotoPost(id),photoPost);
    if(!validatePhotoPost(edit)) return false;
    Object.assign(getPhotoPost(id),edit);
    return true;
}
function removePhotoPost(id){
    let del=-1;
    for(let i=0;i<photoPosts.length;i++){
        if(photoPosts[i].id===id) del=i;
    }
    if(del!==-1){
         photoPosts.splice(del,1);
         return true;
    }
    return false;
}
console.log(getPhotoPost("13"));
console.log(getPhotoPosts(0,20,{hashTags:['#познание']}));
console.log(addPhotoPost({id: '21',
descriprion: 'Хммммммммммм',
createdAt: new Date('2019-03-19T23:48:00'),
author: 'Аркадий Генадьев',
photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kant_gemaelde_3.jpg/401px-Kant_gemaelde_3.jpg',
hashTags: ['#познание','#аниме'],
likes: ['Артем Щербицкий']}));
console.log(photoPosts);
console.log(editPhotoPost("13",{descriprion:"Вот изменненное описание"}));
console.log(getPhotoPost("13"));
console.log(removePhotoPost("13"));
console.log(photoPosts);
}());