const guitarists = new Set<string>();

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

for(const ele of guitarists){
    console.log(ele)
}

const map = new Map<string, number>();
map.set("key1", 1);

console.log(map.get("key1"))