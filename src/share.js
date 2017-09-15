import React from 'react'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';



const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');
const EmailIcon = generateShareIcon('email');

const shareUrlBase = 'http://stackronym.welovedevs.com';
const title = 'Stackronym - my stack is ';

const removeHash = (hash) => hash.slice(1, hash.length)

const ShareBarContainer = ({location}) => (
	<ShareBar
		shareUrl={shareUrlBase + '/' + location.hash}
		title={title + removeHash(location.hash).toUpperCase()}
		urlForCounter={shareUrlBase}
		/>
)

const ShareBar = ({shareUrl, urlForCounter, title}) => (
		<div className="Demo__container">
	        <div className="Demo__some-network">
	          <FacebookShareButton
	            url={shareUrl}
	            quote={title}
	            className="Demo__some-network__share-button">
	            <FacebookIcon
	              size={32}
	              round />
	          </FacebookShareButton>

	          <FacebookShareCount
	            url={urlForCounter}
	            className="Demo__some-network__share-count">
	            {count => count + 2134}
	          </FacebookShareCount>
	        </div>

	        <div className="Demo__some-network">
	          <TwitterShareButton
	            url={shareUrl}
	            title={title}
	            className="Demo__some-network__share-button">
	            <TwitterIcon
	              size={32}
	              round />
	          </TwitterShareButton>


	          <FacebookShareCount
	            url={urlForCounter}
	            className="Demo__some-network__share-count">
	            {count => ((count + 2134 / 10) + (count + 2134 % 10)) * 10}
	          </FacebookShareCount>
	        </div>

	        <div className="Demo__some-network">
	          <TelegramShareButton
	            url={shareUrl}
	            title={title}
	            className="Demo__some-network__share-button">
	            <TelegramIcon size={32} round />
	          </TelegramShareButton>

	          <div className="Demo__some-network__share-count">
	            &nbsp;
	          </div>
	        </div>

	        <div className="Demo__some-network">
	          <WhatsappShareButton
	            url={shareUrl}
	            title={title}
	            separator=":: "
	            className="Demo__some-network__share-button">
	            <WhatsappIcon size={32} round />
	          </WhatsappShareButton>

	          <div className="Demo__some-network__share-count">
	            &nbsp;
	          </div>
	        </div>

	        <div className="Demo__some-network">
	          <GooglePlusShareButton
	            url={shareUrl}
	            className="Demo__some-network__share-button">
	            <GooglePlusIcon
	              size={32}
	              round />
	          </GooglePlusShareButton>

	          <GooglePlusShareCount
	            url={urlForCounter}
	            className="Demo__some-network__share-count">
	            {count => count + 78}
	          </GooglePlusShareCount>
	        </div>

	        <div className="Demo__some-network">
	          <LinkedinShareButton
	            url={shareUrl}
	            title={title}
	            windowWidth={750}
	            windowHeight={600}
	            className="Demo__some-network__share-button">
	            <LinkedinIcon
	              size={32}
	              round />
	          </LinkedinShareButton>

	          <LinkedinShareCount
	            url={urlForCounter}
	            className="Demo__some-network__share-count">
	            {count => count + 163}
	          </LinkedinShareCount>
	        </div>

	        <div className="Demo__some-network">
	          <PinterestShareButton
	            url={String(window.location)}
	            windowWidth={1000}
	            windowHeight={730}
	            className="Demo__some-network__share-button">
	            <PinterestIcon size={32} round />
	          </PinterestShareButton>

	          <PinterestShareCount url={urlForCounter}
	            className="Demo__some-network__share-count" />
	        </div>

	        <div className="Demo__some-network">
	          <VKShareButton
	            url={shareUrl}
	            windowWidth={660}
	            windowHeight={460}
	            className="Demo__some-network__share-button">
	            <VKIcon
	              size={32}
	              round />
	          </VKShareButton>

	          <VKShareCount url={urlForCounter}
	            className="Demo__some-network__share-count" />
	        </div>

	        <div className="Demo__some-network">
	          <OKShareButton
	            url={shareUrl}
	            windowWidth={660}
	            windowHeight={460}
	            className="Demo__some-network__share-button">
	            <OKIcon
	              size={32}
	              round />
	          </OKShareButton>

	          <OKShareCount url={shareUrl}
	            className="Demo__some-network__share-count" />
	        </div>

	        <div className="Demo__some-network">
	          <RedditShareButton
	            url={shareUrl}
	            title={title}
	            windowWidth={660}
	            windowHeight={460}
	            className="Demo__some-network__share-button">
	            <RedditIcon
	              size={32}
	              round />
	          </RedditShareButton>

	          <RedditShareCount url={urlForCounter}
	            className="Demo__some-network__share-count" />
	        </div>

	        <div className="Demo__some-network">
	          <EmailShareButton
	            url={shareUrl}
	            subject={title}
	            body="body"
	            className="Demo__some-network__share-button">
	            <EmailIcon
	              size={32}
	              round />
	          </EmailShareButton>
	        </div>
	      </div>)


export default ShareBarContainer;
