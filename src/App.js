import Profile from "./profile.js";
import { getImageUrl } from "./utils.js";

export default function Gallery(props) {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        Name="Maria Skłodowska-Curie"
        Img="szV5sdG"
        Alt="Maria Skłodowska-Curie"
        Profession="physicist and chemist"
        Awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        Discovered="polonium (element)"
        Width="100"
        Height="100"
        AwardsAmount="4"
      />
      <Profile
        Name="Katsuko Saruhashi"
        Img="YfeOqp2"
        Alt="Katsuko Saruhashi"
        Profession="geochemist"
        Awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        Discovered="a method for measuring carbon dioxide in seawater"
        Width="100"
        Height="100"
        AwardsAmount="2"
      />
    </div>
  );
}
