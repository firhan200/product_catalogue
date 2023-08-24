import Divider from "../../atoms/Divider/Divider";

export default function CategoryTitle({ title }: { title: string }){
	return (
		<Divider>
			<div className="text-2xl">{ title }</div>
		</Divider>
	);
}
