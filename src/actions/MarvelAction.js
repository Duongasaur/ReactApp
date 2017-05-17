import React from "react";
import md5 from "md5";
import axios from "axios";

const PUBLIC_API_KEY = "9d36c034769b21460603b0609345102d";
const PRIVATE_API_KEY = "17c508e5ef2d47c9e63b9d5ac2bf067afe3e7fcc";
const baseUrlAPI = "http://gateway.marvel.com/v1/public/";

const timestamp = (new Date()).getTime();
const kush = md5(timestamp + PRIVATE_API_KEY + PUBLIC_API_KEY);
const authentication = "?ts=" + timestamp + "&apikey=" + PUBLIC_API_KEY + "&hash=" + kush;

export const FETCH_HEROS_DATA = "FETCH_HEROS_DATA";
export const FETCH_SINGLE_HERO_DATA = "FETCH_SINGLE_HERO_DATA";

export function fetchHerosList(offset = 0) {
	const heroListsEndpoint = baseUrlAPI + "characters" + authentication;
	const request = axios.get(heroListsEndpoint + "&offset=" + offset);

	return {
		type: FETCH_HEROS_DATA,
		payload: request
	};
}

export function fetchHero(id) {
	const singleHeroEndPoint = baseUrlAPI + "characters/" + id + authentication;
	const request = axios.get(singleHeroEndPoint);

	return {
		type: FETCH_SINGLE_HERO_DATA,
		payload: request
	};
}
