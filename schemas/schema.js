// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

//blocks
import HeadingOneTwoThreeNormalSmall from "./blocks/headingOneTwoThreeNormalSmall";
//documents
import Menu from "./documents/menu";
import Page from "./documents/page";
import Footer from "./documents/footer";
import Home from "./documents/home";

//objects
import MenuItem from "./objects/menuItem";
import ImageBlock from "./objects/imageBlock";
import ImageTextBlock from "./objects/imageTextBlock";
import FooterLink from "./objects/footerLink";
import TextBlock from "./objects/textBlock";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    Menu,
    MenuItem,
    Home,
    Page,
    Footer,
    ImageBlock,
    ImageTextBlock,
    FooterLink,
    TextBlock,
    HeadingOneTwoThreeNormalSmall,
  ]),
});
