export default function Image({ src }: { src: string }){
	return (
		<img src={src} className="w-full" loading="lazy"/>
	);
}
