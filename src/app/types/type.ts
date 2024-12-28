export type User = {
	id: number
	name: string
	token?: Token
}

export type Token = {
	client: string,
	token: string,
	token_hash: string
	expiry: number
}
