export const constraint = `# OK-iCE40Pro Pin Constraint File

# clock 12mhz
set_io -nowarn clk12  		35

# leds
set_io -nowarn led_b  		40
set_io -nowarn led_r  		41

# audio
set_io -nowarn speaker 		10

# pmod
set_io -nowarn p1			42
set_io -nowarn p2			43
set_io -nowarn p3			44
set_io -nowarn p4			45
set_io -nowarn p5			46
set_io -nowarn p6			47
set_io -nowarn p7			48
set_io -nowarn p8			2
set_io -nowarn p9			3

# keys
set_io -nowarn key_a 		19
set_io -nowarn key_b 		18
set_io -nowarn key_m 		20
set_io -nowarn key_u 		38
set_io -nowarn key_d 		34
set_io -nowarn key_l 		32
set_io -nowarn key_r 		36

# usb-uart
set_io -nowarn rx 			6
set_io -nowarn tx 			9

# spi-flash
set_io -nowarn spi0_mosi 	14
set_io -nowarn spi0_miso 	17
set_io -nowarn spi0_sclk 	15
set_io -nowarn spi0_cs0 	16

# spi-lcd
set_io -nowarn spi1_mosi 	25
set_io -nowarn spi1_miso 	11
set_io -nowarn spi1_sclk 	23
set_io -nowarn spi1_cs0 	21
set_io -nowarn lcd_nrst 	27
set_io -nowarn lcd_dc 		26
set_io -nowarn lcd_bl 		39

# 3d-sensor
set_io -nowarn 3d_int 		37
set_io -nowarn 3d_scl 		28
set_io -nowarn 3d_sda 		31
`;
