'use stirct';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { of } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class AssetsService {

	private database = {
		"user": {
		  "id": "user123",
		  "name": "John Doe",
		  "folders": [
			{
				"name": "Carpeta 0",
			},
			{
				"name": "Carpeta 1",
			},
			{
				"name": "Carpeta 2",
			},
			{
				"name": "Carpeta 3",
			},
			{
			  "name": "Carpeta 4",
			  "assets": [
				{
				  "id": "asset1",
				  "name": "imagen1.jpg",
				  "type": "image",
				  "size": "2MB"
				},
				{
				  "id": "asset2",
				  "name": "documento1.pdf",
				  "type": "document",
				  "size": "1MB"
				},
				{
				  "id": "asset14",
				  "name": "imagen5.jpg",
				  "type": "image",
				  "size": "4MB"
				},
				{
				  "id": "asset15",
				  "name": "documento5.pdf",
				  "type": "document",
				  "size": "2MB"
				},
				{
				  "id": "asset16",
				  "name": "video3.mp4",
				  "type": "video",
				  "size": "12MB"
				}
			  ],
			  "subfolders": [
				{
				  "name": "Carpeta 2",
				  "assets": [
					{
					  "id": "asset3",
					  "name": "video1.mp4",
					  "type": "video",
					  "size": "15MB"
					},
					{
					  "id": "asset17",
					  "name": "audio3.mp3",
					  "type": "audio",
					  "size": "6MB"
					},
					{
					  "id": "asset18",
					  "name": "imagen6.png",
					  "type": "image",
					  "size": "5MB"
					}
				  ],
				  "subfolders": [
					{
					  "name": "Carpeta 3",
					  "assets": [
						{
						  "id": "asset4",
						  "name": "audio1.mp3",
						  "type": "audio",
						  "size": "5MB"
						},
						{
						  "id": "asset5",
						  "name": "imagen2.jpg",
						  "type": "image",
						  "size": "3MB"
						},
						{
						  "id": "asset19",
						  "name": "imagen7.png",
						  "type": "image",
						  "size": "2MB"
						},
						{
						  "id": "asset20",
						  "name": "documento6.pdf",
						  "type": "document",
						  "size": "3MB"
						}
					  ],
					  "subfolders": [
						{
						  "name": "Carpeta 4",
						  "assets": [
							{
							  "id": "asset21",
							  "name": "video4.mov",
							  "type": "video",
							  "size": "30MB"
							}
						  ],
						  "subfolders": [
							{
							  "name": "Carpeta 5",
							  "assets": [
								{
								  "id": "asset6",
								  "name": "documento2.pdf",
								  "type": "document",
								  "size": "0.5MB"
								},
								{
								  "id": "asset7",
								  "name": "imagen3.png",
								  "type": "image",
								  "size": "1.2MB"
								},
								{
								  "id": "asset22",
								  "name": "audio4.wav",
								  "type": "audio",
								  "size": "7MB"
								},
								{
								  "id": "asset23",
								  "name": "video5.mp4",
								  "type": "video",
								  "size": "22MB"
								}
							  ],
							  "subfolders": [
								{
								  "name": "Carpeta 6",
								  "assets": [
									{
									  "id": "asset8",
									  "name": "presentacion1.pptx",
									  "type": "presentation",
									  "size": "10MB"
									},
									{
									  "id": "asset24",
									  "name": "documento7.docx",
									  "type": "document",
									  "size": "5MB"
									}
								  ],
								  "subfolders": [
									{
									  "name": "Carpeta 7",
									  "assets": [
										{
										  "id": "asset25",
										  "name": "audio5.mp3",
										  "type": "audio",
										  "size": "4MB"
										}
									  ],
									  "subfolders": [
										{
										  "name": "Carpeta 8",
										  "assets": [
											{
											  "id": "asset9",
											  "name": "video2.mp4",
											  "type": "video",
											  "size": "25MB"
											},
											{
											  "id": "asset10",
											  "name": "documento3.docx",
											  "type": "document",
											  "size": "2.5MB"
											},
											{
											  "id": "asset26",
											  "name": "imagen8.jpg",
											  "type": "image",
											  "size": "3MB"
											},
											{
											  "id": "asset27",
											  "name": "audio6.ogg",
											  "type": "audio",
											  "size": "6MB"
											}
										  ],
										  "subfolders": [
											{
											  "name": "Carpeta 9",
											  "assets": [
												{
												  "id": "asset11",
												  "name": "audio2.wav",
												  "type": "audio",
												  "size": "8MB"
												},
												{
												  "id": "asset28",
												  "name": "video6.mov",
												  "type": "video",
												  "size": "28MB"
												}
											  ],
											  "subfolders": [
												{
												  "name": "Carpeta 10",
												  "assets": [
													{
													  "id": "asset12",
													  "name": "imagen4.gif",
													  "type": "image",
													  "size": "0.8MB"
													},
													{
													  "id": "asset13",
													  "name": "documento4.pdf",
													  "type": "document",
													  "size": "3MB"
													},
													{
													  "id": "asset29",
													  "name": "imagen9.png",
													  "type": "image",
													  "size": "1.5MB"
													},
													{
													  "id": "asset30",
													  "name": "audio7.mp3",
													  "type": "audio",
													  "size": "9MB"
													}
												  ],
												  "subfolders": []
												}
											  ]
											}
										  ]
										},
										{
										  "name": "Carpeta 8.1",
										  "assets": [
											{
											  "id": "asset31",
											  "name": "documento8.pdf",
											  "type": "document",
											  "size": "7MB"
											},
											{
											  "id": "asset32",
											  "name": "imagen10.jpg",
											  "type": "image",
											  "size": "6MB"
											}
										  ],
										  "subfolders": []
										}
									  ]
									}
								  ]
								}
							  ]
							}
						  ]
						},
						{
						  "name": "Carpeta 3.1",
						  "assets": [
							{
							  "id": "asset33",
							  "name": "video7.mp4",
							  "type": "video",
							  "size": "19MB"
							},
							{
							  "id": "asset34",
							  "name": "audio8.wav",
							  "type": "audio",
							  "size": "11MB"
							}
						  ],
						  "subfolders": []
						}
					  ]
					}
				  ]
				}
			  ]
			}
		  ]
		}
	};

  	constructor() { };

 	/**
 	 * Retrieves data from a specified level in the JSON structure.
 	 * @param level - the depth level requested (e.g., 1 for root, 2 for first folder, etc.)
 	 * @returns an Observable with the requested data.
 	 */
 	public getDataByLevel(level: number): Observable<any> {
 	  	const data = this.getLevelData(this.database.user.folders, level);
 	  	return of(data);
 	};

 	/**
 	 * Recursively traverses the folder structure to get data for a specific level.
 	 * @param folders - the folder array to traverse
 	 * @param level - the desired level of depth
 	 * @returns data from the requested level
 	 */
 	private getLevelData(folders: any[], level: number): any[] {
 	  	if (level === 1)
 	    	return folders;

 	  	let result: any[] = [];
 	  	for (const folder of folders) {
 	  	  	if (folder.subfolders && folder.subfolders.length > 0)
 	  	    	result = result.concat(this.getLevelData(folder.subfolders, level - 1));
 	  	};

 	  	return result;
 	};
};